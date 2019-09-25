# tree
> 以图形方式显示在驱动器中的目录结构或磁盘的路径。

有时候需要整理文档目录时，而文件太多，一个个去写相应的文件目录结构也不现实，就用到了window下的`tree`命令

## 语法
```
tree [<Drive>:][<Path>] [/f] [/a]
```

| 参数名 | 说明 | 必选 |
| -- | -- | -- |
| Drive  | 想要显示的目录结构的磁盘的驱动器 | N |
| Path  | 显示的目录结构的目录 | N |
| /f  | 每个目录中的文件的名称【递归显示】 | N |
| /a  | 使用文本字符而非图形字符显示链接子目录的行 | N |
| /?  | 在命令提示符下显示帮助。 | N |

## tree
显示当前文件夹下所有文件夹【不显示文件】

## tree /f
递归显示所有文件和文件夹

## tree /a
和`tree`显示类似，只是不用图形进行显示罢了

## tree /?
显示帮助信息，而非我们一般认为的`tree -h`

## tree [可选] | more
一屏显示内容，通过**空格**进行分页浏览

## tree prn
目前这个无效

## 参考链接
+ [官网](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/tree#BKMK_examples)