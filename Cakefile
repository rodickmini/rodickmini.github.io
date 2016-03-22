process.env.NODE_ENV = 'development'

{
    kit,
    kit: {
        _,
        log,
        Promise,
        path: {
            join,
            relative
        }
    }
} = require 'nobone'
colors = require 'colors'

root_path = process.cwd()

dirs = require './dirs.json'

# 是否需要开启同步到服务器工具
option '-s', '--sync',
    'Running lint script at quite mode results in only printing errors.
    Example: cake -sy dev'

copy = (from, to, filter) ->
        kit.copy(from, to, filter)
        kit.log '>> Copy: '.cyan + from.replace(root_path, '').blue + ' -> '.grey + to.replace(root_path, '').green

copy_bowerfiles_to_lib = ->
    bower_paths = [
        {
            from: kit.path.join dirs.bower_path, '+(underscore|requirejs|jquery-unveil)'
            to: kit.path.join dirs.js_path, 'lib'
            type: 'js'
        }

        {
            from: kit.path.join dirs.bower_path, 'jquery.cookie'
            to: kit.path.join dirs.js_path, 'lib'
            type: 'js'
        }

        {
            from: kit.path.join dirs.bower_path, 'jquery/dist'
            to: kit.path.join dirs.js_path, 'lib'
            type: 'js'
        }

        {
            from: kit.path.join dirs.bower_path, 'fastclick/lib'
            to: kit.path.join dirs.js_path, 'lib'
            type: 'js'
        }

        {
            from: kit.path.join dirs.bower_path, 'iscroll/build'
            to: kit.path.join dirs.js_path, 'lib'
            type: 'js'
        }

        {
            from: kit.path.join dirs.bower_path, 'button'
            to: kit.path.join dirs.js_path, 'lib'
            type: 'js'
        }

        {
            from: kit.path.join dirs.bower_path, 'Swiper/dist/js'
            to: kit.path.join dirs.js_path, 'lib'
            type: 'js'
        }

        {
            from: kit.path.join dirs.bower_path, 'nicelibrary/dist'
            to: kit.path.join dirs.js_path, 'lib'
            type: 'js'
            all: true
        }

        {
            from: kit.path.join dirs.bower_path, '+(animate.css|normalize.css)'
            to: kit.path.join dirs.stylus_path, 'lib'
            type: 'css'
        }

        {
            from: kit.path.join dirs.bower_path, 'Swiper/dist/css'
            to: kit.path.join dirs.stylus_path, 'lib'
            type: 'css'
        }

    ]
    kit.remove "#{dirs.js_path}/lib"
    .then ->
        kit.log ">> Remove: js lib Done.".green
        kit.remove "#{dirs.css_path}/lib"
        kit.log ">> Remove: css lib Done.".green
    .then ->
        kit.log ">> Copy: bower_components files to source Start.".cyan
        Promise.all bower_paths.map((info) ->
            { from, to, type, all } = info
            kit.glob( join(from, if all then '**/*.'+ type else  '*.' + type) ).then (paths) ->
                Promise.all(_.map paths, (path) ->
                    path = relative dirs.bower_path, path
                    _from = join(dirs.bower_path, path)
                    _to = join(to, path)

                    filter_reg = /(\.min|-min|Gruntfile|nodejs-demo|server)(\.js|\.css|\.css|\.png)$/
                    if not filter_reg.test(_from)
                        copy _from, _to
            )
        )
    .then ->
        kit.log ">> Copy: bower_components files to source Done.".green

build_zepto = ->
    zepto_path = join 'bower_components', 'zeptojs'
    mods = 'zepto event ajax ie detect selector data callbacks deferred stack ios3 form touch'
    kit.log '>> Install zepto dependencies.'.cyan
    kit.spawn 'npm', ['install'], {
        cwd: zepto_path
    }
    .then ->
        coffee_bin = join 'node_modules', '.bin', 'coffee'


        kit.spawn coffee_bin, ['make', 'dist'], {
            cwd: zepto_path
            env: _.defaults(
                { MODULES: mods }
                process.env
            )
        }
        .then ->
            kit.log ('>> Build Zepto with: ' + mods + ' Done.').green



# 安装bower 依赖，build zepto模块，复制bower依赖文件到相应的lib目录
task 'setup', 'Setup', (opts)->

    kit.spawn 'bower', ['install']
    .then ->
        kit.log  ">> ********************** Setup Start ********************** ".yellow
        # build_zepto()
    .then ->
        copy_bowerfiles_to_lib()
    .then ->

task 'buildzepto', 'Build Zepto', (opts) ->
    build_zepto()

task 'copylib', 'Copy Lib', (opts) ->
    copy_bowerfiles_to_lib()



# 发布到build环境，编译所有的模板，js文件，css文件，hash，最终发布到线上
task 'build', 'Build', (opts) ->
    kit.spawn 'gulp'

# 开发调试环境，启动文件监听服务
task 'dev', 'Run dev tools', (opts) ->
    kit.spawn 'puer', ['-d src -a src/static/js/mock/router.js']
    kit.spawn 'gulp', ['watch']
    # 如果需要同步代码到开发机 运行 'cake -s dev 默认不开启同步工具'
    kit.spawn './node_modules/nobone-sync/bin/nobone-sync', ['.nobone-sync.coffee'] if opts.sync
