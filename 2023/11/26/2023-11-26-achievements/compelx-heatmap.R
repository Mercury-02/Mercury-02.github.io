library(pheatmap)
library(RColorBrewer)
setwd('E://R语言学习文件/')
dataset <- read.csv("antibiotic1.csv",header = TRUE, row.names= 1)
tdata <- t(dataset)
annotation<- read.csv("annotation_t.csv",header = TRUE, row.names= 1)
ann_colors=
list(FunctionGroup=c(Metabolism="#E5E1EE",
                     QS="#DFFDFF",
                     RNA_modify="#90BEDE",
                     Stress="#68EDC6",
                     T2SS="#90F3FF",
                     T3SS="#FFC5A1",
                     T4Pili="#D1B063",
                     Wild_type="#B33475"))
manual_culster =  c("Wlid_type",
                    rep(c("T3SS"),10),
            rep("metabolism",15),
            rep("T4Pili",4),
            rep("QS",9),
            rep("T2SS",4),
            rep("RNA_modify",4),
            rep("Stress",5),
            
            ) #根据先验知识进行手动聚类

pheatmap(tdata,#表达数据
         #display_numbers = F, #  矩阵的数值是否显示在热图上
         #number_format = "%.2f", # 单元格中数值的显示方式
         #fontsize_number = 8, #  显示在热图上的矩阵数值的大小，默认为0.8*fontsize
         cluster_rows = F,#行聚类
         cluster_cols = F,#列聚类
         clustering_method = "complete", #表示聚类方法，包括：
         #‘ward’, ‘ward.D’, ‘ward.D2’, ‘single’, ‘complete’, ‘average’, ‘mcquitty’, ‘median’, ‘centroid’
         show_rownames = T,#显示行名
         show_co1names= T,#显示列名
         #scale = "column",#对行标准化'none', 'row' or 'column
         color = c("#00BFFF","white","#FF4500"),#颜色
         legend = T,#显示图例
         legend_breaks = c(0,1),#图例断点显示
         breaks = c(0,0.45,0.55,1),#图例断点
         legend_labels = c("non-resist","resist"), # 图例断点标注的标题
         #cellwidth = 7, cellheight = 4,#调整热图单元格宽度、高度
         #treeheight_row = 30, treeheight_col = 18,#调整行列聚类树的高度
         fontsize =7, fontsize_row = 7, fontsize_col = 7, #热图中字体大小、行、列名字体大小
         main = "根据列聚类分隔", #表示热图的标题名字
         annotation_col = annotation, #添加列注释信息
         #annotation_row = annotation_row, #添加行注释信息
         annotation_1egend=T,#显示样本分类
         annotation_colors =ann_colors,#设置行注释颜色
         cutree_rows=3,cutree_cols=7,#根据行列的“聚类”将热图分隔开
         #gaps_row = c(12, 21),#未进行聚类时手动分割
         #gaps_col = c(1,11,15,19,28,43,48),#未进行聚类时手动分割
         #labels_row = NULL, #使用行标签代替行名
         #labels_col = NULL, #列表签代替列名
         )#热图基准颜色