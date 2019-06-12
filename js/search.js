const PRODUCTS = [
    {category: "phone", stocked: true, name: "怦然心动 ", href: "./assets/love"},
    {category: "phone", stocked: true, name: "冰原歌单 ", href: "./assets/vue/music"},
    {category: "phone", stocked: true, name: "催菜星空 ", href: "./assets/sky/"},
    {category: "phone", stocked: true, name: "导航优化 ", href: "./assets/navbar/"},
    {category: "phone", stocked: true, name: "蘑菇街装 ", href: "./assets/mogujie/"},
    {category: "phone", stocked: true, name: "儿童写真 ", href: "./assets/marry/"},
    {category: "phone", stocked: true, name: "视频截图 ", href: "./assets/scripmv/"},
    {category: "phone", stocked: true, name: "星巴咖啡 ", href: "./assets/star/"},
    {category: "phone", stocked: true, name: "陀螺仪图 ", href: "./assets/css/allperspective/"},
    {category: "phone", stocked: true, name: "炫酷轮播 ", href: "./assets/css/cssstyle/"},
    {category: "phone", stocked: true, name: "六面炫图 ", href: "./assets/css/sixrotate/"},
    {category: "phone", stocked: true, name: "左右集图 ", href: "./assets/css/trotatey/"},
    {category: "phone", stocked: true, name: "上下相册 ", href: "./assets/css/trotatex/"},
    {category: "phone", stocked: true, name: "王者战报 ", href: "./assets/wang/"},
    {category: "phone", stocked: true, name: "雪夜长安 ", href: "./assets/css/snow/"},
    {category: "phone", stocked: true, name: "观澜数据 ", href: "./assets/glsite/"},
    {category: "phone", stocked: true, name: "图片切入 ", href: "./assets/api/"},
    {category: "phone", stocked: true, name: "瀑布流图 ", href: "./assets/pu/"},
    {category: "phone", stocked: true, name: "绘制网络 ", href: "./assets/Echarts/"},
    {category: "phone", stocked: true, name: "阴阳日历 ", href: "./assets/calender"},
    {category: "phone", stocked: true, name: "Hexo网站 ", href: "https://love.kankan.fun"},
    {category: "phone", stocked: true, name: "Jekyll网站 ", href: "https://fanny.kankan.fun"},

    {category: "pc", stocked: true, name: "黑客帝国", href: "./assets/zero"},
    {category: "pc", stocked: true, name: "怦然心动", href: "./assets/love"},
    {category: "pc", stocked: true, name: "冰原歌单", href: "./assets/vue/music"},
    {category: "pc", stocked: true, name: "催菜星空", href: "./assets/sky/"},
    {category: "pc", stocked: true, name: "导航优化", href: "./assets/navbar/"},
    {category: "pc", stocked: true, name: "蘑菇街装", href: "./assets/mogujie/"},
    {category: "pc", stocked: true, name: "儿童写真", href: "./assets/marry/"},
    {category: "pc", stocked: true, name: "视频截图", href: "./assets/scripmv/"},
    {category: "pc", stocked: true, name: "星巴咖啡", href: "./assets/star/"},
    {category: "pc", stocked: true, name: "京剧高亮", href: "./assets/jingju/"},
    {category: "pc", stocked: true, name: "陀螺仪图", href: "./assets/css/allperspective/"},
    {category: "pc", stocked: true, name: "炫酷轮播", href: "./assets/css/cssstyle/"},
    {category: "pc", stocked: true, name: "六面炫图", href: "./assets/css/sixrotate/"},
    {category: "pc", stocked: true, name: "左右集图", href: "./assets/css/trotatey/"},
    {category: "pc", stocked: true, name: "上下相册", href: "./assets/css/trotatex/"},
    {category: "pc", stocked: true, name: "王者战报", href: "./assets/wang/"},
    {category: "pc", stocked: true, name: "雪夜长安", href: "./assets/css/snow/"},
    {category: "pc", stocked: true, name: "观澜数据", href: "./assets/glsite/"},
    {category: "pc", stocked: true, name: "图片切入", href: "./assets/api/"},
    {category: "pc", stocked: true, name: "瀑布流图", href: "./assets/pu/"},
    {category: "pc", stocked: true, name: "绘制网络", href: "./assets/Echarts/"},
    {category: "pc", stocked: true, name: "移动回放", href: "./assets/move"},
    {category: "pc", stocked: true, name: "阴阳日历", href: "./assets/calender"},
    {category: "pc", stocked: true, name: "方格定位", href: "./assets/fangge"},
    {category: "pc", stocked: true, name: "图片拖拽", href: "./assets/dragp"},
    {category: "pc", stocked: true, name: "你画我猜", href: "./assets/guess"},
    {category: "pc", stocked: true, name: "碰撞检测", href: "./assets/peng"},
    {category: "pc", stocked: true, name: "Hexo网站", href: "https://love.kankan.fun"},
    {category: "pc", stocked: true, name: "Jekyll网站", href: "https://fanny.kankan.fun"},
];

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2" className="center">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color: 'red'}}>
        {product.name}
    </span>;

        return (
            <tr>
                <td>{name}</td>
                <td><a href={product.href}>查看更多>></a></td>
            </tr>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            // console.log(product.name);
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow
                        category={product.category}
                        key={product.category}/>
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });

        return (
            <table className="table">
                <thead>
                <tr>
                    <th>名称</th>
                    <th>详情</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="搜索..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.querySelector('.search')
);