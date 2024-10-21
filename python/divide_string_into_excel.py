import pandas as pd

# 输入的关键词字符串
keywords_string = "增强集团推广,图片功能优化，支持编辑,设置功能优化,截图功能增强,文件上传下载优化,历史消息聊天记录优化,多选功能优化 ,@功能优化,增强在线客服&意见反馈,聊天列表交互优化,消息通知提醒功能增强,表情回复,已读未读,固定消息优化,单聊、拉群等安全权限控制,消息推送提醒通知优化,机器人账号,语音通话&视频会议,支持发送语音,转发功能增强,回复功能增强,支持收藏,搜索功能优化,联系人卡片功能优化,新增录屏功能,交互细节优化,提高速度与稳定性,增加群发功能,工作圈,删除消息、文件、图片等,集成邮箱、邮件功能,独立的IM工具,兼容性优化,内外N网络选择优化,通讯录选择功能优化,远程协助,结合业务，增强协同,红包,在线离线状态,群管理功能增强,敏感词审核风控,集成云盘,联系人分组,集成瑞淘小助手,导出并保存聊天内容"  # 在这里替换为你的关键词字符串

# 将字符串分割成列表
keywords_list = [keyword.strip() for keyword in keywords_string.split(',')]

# 创建 DataFrame
df = pd.DataFrame(keywords_list, columns=['Keywords'])

# 导出为 Excel 文件
output_file = 'keywords_output.xlsx'  # 输出文件名
df.to_excel(output_file, index=False)

print(f'关键词已导出到 {output_file}')
