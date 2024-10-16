import pandas as pd
from draw_chart import drawBarChartByProductAndRegionSummary


# 读取 CSV 文件
df = pd.read_csv('sales_data.csv')

# 按产品分组并汇总销售量和收入
product_summary = df.groupby('产品').agg({'销售量': 'sum', '收入': 'sum'}).reset_index()
print("\n按产品类型汇总：")
print(product_summary)


# 按地区分组并汇总销售量和收入
region_summary = df.groupby('地区').agg({'销售量': 'sum', '收入': 'sum'}).reset_index()
print("\n按地区汇总：")
print(region_summary)


drawBarChartByProductAndRegionSummary(product_summary, region_summary)


