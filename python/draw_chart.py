import matplotlib.pyplot as plt
def drawBarChartByProductAndRegionSummary(product_summary, region_summary):
  # 设置中文字体（macOS 默认支持中文）
  plt.rcParams['font.sans-serif'] = ['Arial Unicode MS']
  plt.rcParams['axes.unicode_minus'] = False

  # 按产品类型绘制销售量和收入柱状图
  fig, ax1 = plt.subplots(figsize=(10,6))

  # 销售量
  ax1.bar(product_summary['产品'], product_summary['销售量'], color='skyblue', label='销售量')
  ax1.set_xlabel('产品')
  ax1.set_ylabel('销售量', color='skyblue')
  ax1.tick_params(axis='y', labelcolor='skyblue')

  # 创建第二个y轴用于收入
  ax2 = ax1.twinx()
  ax2.plot(product_summary['产品'], product_summary['收入'], color='orange', marker='o', label='收入')
  ax2.set_ylabel('收入 (元)', color='orange')
  ax2.tick_params(axis='y', labelcolor='orange')

  # 添加标题和图例
  plt.title('按产品类型的销售量和收入')
  fig.legend(loc='upper left', bbox_to_anchor=(0.1,0.9))

  plt.show()
  
  # 按地区类型绘制销售量和收入柱状图
  fig, ax1 = plt.subplots(figsize=(10,6))

  # 销售量
  ax1.bar(region_summary['地区'], region_summary['销售量'], color='lightgreen', label='销售量')
  ax1.set_xlabel('地区')
  ax1.set_ylabel('销售量', color='lightgreen')
  ax1.tick_params(axis='y', labelcolor='lightgreen')

  # 创建第二个y轴用于收入
  ax2 = ax1.twinx()
  ax2.plot(region_summary['地区'], region_summary['收入'], color='red', marker='o', label='收入')
  ax2.set_ylabel('收入 (元)', color='red')
  ax2.tick_params(axis='y', labelcolor='red')

  # 添加标题和图例
  plt.title('按地区的销售量和收入')
  fig.legend(loc='upper left', bbox_to_anchor=(0.1,0.9))

  plt.show()

