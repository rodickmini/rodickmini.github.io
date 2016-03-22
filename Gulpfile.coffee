# gulp 配置文件
# author: rochappy

# 命令方式
# cake dev 命令 开发状态下开启，实时编译
# cake -s dev 命令 开发状态下开启，实时编译，同步代码到开发机
# cake build 发布代码，即线上代码

gulp = require 'gulp'
gulp_plugins = require 'gulp-load-plugins'

nib = require 'nib'
del = require 'del'
colors = require 'colors'
stylus = require 'stylus'

pkg = require './package.json'
dirs = require './dirs.json'

fs = require 'fs'

plugins = gulp_plugins()

# 配置文件
cfg =
    files:
        jade_file: "#{ dirs.jade_path }/**/*.jade"
        styl_file: "#{ dirs.stylus_path }/**/*.styl"
        coffee_file: "#{ dirs.coffee_path }/**/*.coffee"
        ejs_file: "#{ dirs.ejs_path }/**/*.ejs"

        view_file: "#{ dirs.view_path }/**/*.html"
        js_file: "#{ dirs.js_path }/**/*.js"
        css_file: "#{ dirs.css_path }/**/*.css"
        images_file: "#{ dirs.images_path }/**/*.@(jpg|png|gif|ico)"

        audio_file: "#{ dirs.audio_path }/**/*.*"
        fonts_file: "#{ dirs.fonts_path }/**/*"

    hash:
        algorithm: 'md5'
        hashLength: 6
        template: '<%= name %>-<%= hash %><%= ext %>'
    beautify:
        indentSize: 4
    changeFlag:
        css: false
        img: false
        js: false
        tpl: false
    banner:
        [
            '/**'
            ' * <%= pkg.name %> - <%= pkg.description %>'
            ' * @version v<%= pkg.version %>'
            ' * @author <%= pkg.author %>'
            ' */'
            ' '
        ]

    hash_white_list:
        images: [
            "!lib/emoji/**/*"
            "!icon_logo_180x180.png"
            "!view.gif"
        ]
    uglify_opts:
        mangle:
            except: ['require']

log = (msg) ->
    t = new Date()
    console.log "[" + ("#{t.getHours()}:#{t.getMinutes()}:#{t.getSeconds()}").grey + ("] #{msg}")

# 编译打包项目
build =

    # 修改require 配置
    beforeHasMap: ->
        # 1 获取hash，放到临时文件
        # 2 替换build后的require_config文件，且生成新的hash
        # 3 替换html文件中的require_config内容
        hashmapJson = fs.readFileSync './hashmap/hashmap-js.json', 'utf8'
        hashmapJson = hashmapJson.replace(/{|}/g, '')
        gulp.src  "#{dirs.js_path}/core/require_config.js"
        .pipe plugins.replace "__has_map: ''", "#{hashmapJson}"
        .pipe gulp.dest "#{ dirs.tmp_path }"
        .on 'end', ->
            del.sync "#{ dirs.build_js_path }/core/require_config*"

            gulp.src  "#{ dirs.tmp_path }/require_config.js"
            .pipe plugins.hash cfg.hash
            .pipe gulp.dest "#{ dirs.build_js_path }/core/"
            .pipe plugins.hash.manifest "hashmap-js-require_config.json"
            .pipe plugins.jsbeautifier cfg.beautify
            .pipe gulp.dest './hashmap'
            .on 'end', (a,b)->
                buildLayoutHtml = fs.readFileSync "#{dirs.build_view_path}/common/layout.html", 'utf8'
                hasMapRequireConfig = fs.readFileSync "./hashmap/hashmap-js-require_config.json", 'utf8'

                reg = /require_config-\w+.js/g
                newHash = hasMapRequireConfig.match(reg)[0]
                gulp.src  "#{dirs.build_view_path}/common/layout.html"
                .pipe plugins.replace reg, newHash
                .pipe gulp.dest "#{ dirs.build_view_path }/common/"
                .on 'end', ->
                    del.sync "#{ dirs.tmp_path }"

    js: () ->
        # 先删除，避免重复生成
        del.sync dirs.build_js_path

        gulp.src cfg.files.js_file
        .pipe plugins.uglify cfg.uglify_opts
        .pipe plugins.hash cfg.hash
        .pipe plugins.header cfg.banner.join('\n'), { pkg : pkg }
        .pipe gulp.dest "#{ dirs.build_js_path }"
        .pipe plugins.hash.manifest "hashmap-js.json"
        .pipe plugins.jsbeautifier cfg.beautify
        .pipe gulp.dest './hashmap'

    css: () ->
        # 先删除，避免重复生成
        del.sync dirs.build_css_path

        # 从合并图片处理后的css中进行编译
        gulp.src cfg.files.css_file
        .pipe plugins.minifyCss()
        .pipe plugins.hash cfg.hash
        .pipe plugins.header cfg.banner.join('\n'), { pkg : pkg }
        .pipe gulp.dest "#{ dirs.build_css_path }"
        .pipe plugins.hash.manifest "hashmap-css.json"
        .pipe plugins.jsbeautifier cfg.beautify
        .pipe gulp.dest './hashmap'

    audio: ->
        # 先删除，避免重复生成
        del.sync dirs.build_audio_path

        # 从合并图片处理后的css中进行编译
        gulp.src cfg.files.audio_file
        .pipe plugins.hash cfg.hash
        .pipe gulp.dest "#{ dirs.build_audio_path }"
        .pipe plugins.hash.manifest "hashmap-audio.json"
        .pipe gulp.dest './hashmap'

    images: () ->
        # 先删除，避免重复生成
        del.sync dirs.build_images_path

        image_filter = plugins.filter ["**/*"].concat(cfg.hash_white_list.images)

        gulp.src cfg.files.images_file
        .pipe image_filter
        .pipe plugins.hash cfg.hash
        .pipe image_filter.restore()
        .pipe gulp.dest "#{ dirs.build_images_path }"
        .pipe plugins.hash.manifest "hashmap-images.json"
        .pipe plugins.jsbeautifier cfg.beautify
        .pipe gulp.dest './hashmap'

    fonts: () ->
        # 先删除，避免重复生成
        del.sync dirs.build_fonts_path

        gulp.src cfg.files.fonts_file
        .pipe plugins.hash cfg.hash
        .pipe gulp.dest "#{ dirs.build_fonts_path }"
        .pipe plugins.hash.manifest "hashmap-fonts.json"
        .pipe plugins.jsbeautifier cfg.beautify
        .pipe gulp.dest './hashmap'


compile =

    coffee: ( ) ->
        gulp.src cfg.files.coffee_file
        .pipe plugins.coffee
            bare: true
        .pipe gulp.dest "#{dirs.js_path}"

    stylus: ( ) ->
        gulp.src cfg.files.styl_file
        .pipe plugins.stylus
            use: nib()
            compress: false
            "include css": true
        .pipe gulp.dest "#{ dirs.css_path }"

    concats: ->
        gulp.src cfg.concat_files.main
        .pipe plugins.concat 'main.js', {newLine: ';'}
        .pipe gulp.dest "#{ dirs.js_path }"

# 开发环境实时编译预处理
watch =
    jade: ->
        gulp.src cfg.files.jade_file
        .pipe plugins.watch cfg.files.jade_file
        .pipe plugins.plumber()
        .pipe plugins.jade
            locals: {}
            pretty: true
            
        .pipe gulp.dest "#{dirs.view_path}"
    ejs: ->
        gulp.src cfg.files.ejs_file
        .pipe plugins.watch cfg.files.ejs_file
        .pipe plugins.plumber()
        .pipe plugins.lodashTemplate(
            amd : true
        )
        .pipe gulp.dest "#{ dirs.js_path }/tmpl"
    coffee:  ( ) ->
        gulp.src cfg.files.coffee_file
        .pipe plugins.watch cfg.files.coffee_file
        .pipe plugins.plumber()
        .pipe plugins.coffee
            bare: true
        .pipe gulp.dest "#{dirs.js_path}"

    stylus: ( ) ->
        gulp.src cfg.files.styl_file
        .pipe plugins.watch cfg.files.styl_file
        .pipe plugins.plumber()
        .pipe plugins.stylus
            path: './src/stylus'
            use: nib(),
            compress: false
            "include css": true
        .pipe gulp.dest "#{ dirs.css_path }"

# 复制模板目录到发布环境
gulp.task 'Copy Files', ()->
    gulp.src cfg.files.view_file
    .pipe plugins.replace /{%\/block%}/g, '{%/strip%}{%/block%}'
    .pipe gulp.dest "#{ dirs.build_path }"

    gulp.src cfg.files.view_file
    .pipe gulp.dest "#{dirs.build_path}"

# 压缩、hash、生成hashmap文件
gulp.task 'Build Js', ['Compile Coffee Files'], ()->
    build.js()

# 压缩、hash、生成hashmap文件
gulp.task 'Build Css', ()->
    build.css()

gulp.task 'Build Audio', ()->
    build.audio()

gulp.task 'Before Js HasMap', ()->
    build.beforeHasMap()

# 编译js文件
gulp.task 'Compile Coffee Files', ()->
    compile.coffee()

# 编译stylus文件
gulp.task 'Compile Stylus Files', ->
    compile.stylus()

# 压缩、hash、生成hashmap文件
gulp.task 'Build Images', ()->
    build.images()

# 编译font
gulp.task 'Build Fonts', ()->
    build.fonts()

# 开启watch监听编译
gulp.task 'watch', ->
    watch.coffee()
    watch.stylus()
    watch.jade()
    watch.ejs()

# 编译发布环境，替换模板中静态文件hash。
gulp.task 'build', [ 'Build Js', 'Build Css', 'Build Audio', 'Build Images', 'Build Fonts', 'Copy Files'], ->
    hashjs = gulp.src './hashmap/hashmap-js.json'
    hashcss = gulp.src './hashmap/hashmap-css.json'
    hashimages = gulp.src './hashmap/hashmap-images.json'
    hashiaudio = gulp.src './hashmap/hashmap-audio.json'
    hashfonts = gulp.src './hashmap/hashmap-fonts.json'

    # 替换模板中的js hash值
    gulp.src ["#{dirs.build_path}/**/*.html"]
    .pipe plugins.revReplace
        manifest: hashjs
    .pipe gulp.dest "#{ dirs.build_path }"

    .pipe plugins.revReplace
        manifest: hashcss
    .pipe gulp.dest "#{ dirs.build_path }"

    .pipe plugins.revReplace
        manifest: hashimages
    .pipe gulp.dest "#{ dirs.build_path }"

    .pipe plugins.revReplace
        manifest: hashiaudio
    .pipe gulp.dest "#{ dirs.build_path }"
    .on 'end', ->
        # 给layout 插入hasmap 数据
        gulp.run 'Before Js HasMap'

    # 替换css, js中的img hash值
    gulp.src ["#{dirs.build_path}/**/*.css", "#{dirs.build_path}/**/*.js"]
    .pipe plugins.revReplace
        manifest: hashimages
    .pipe gulp.dest "#{ dirs.build_path }"
    .pipe plugins.revReplace
        manifest: hashfonts
    .pipe gulp.dest "#{ dirs.build_path }"
    .on 'end', ->
        log '**************** Build Done! *************'.green

gulp.task 'default', ['build']
