const axios=require('axios')
const newsHandler = async (req, res) => {
    try {
        const currentPage=1;
        const pageSize=10;
        const apiKey = '84432522b9bf4608bfb735a7732a2ae3';
        const keywords = ["cars", "vehicles", "car reviews"];
        const keywordString = keywords.join(" ");
        const url = `https://newsapi.org/v2/everything?q=${keywordString}&apiKey=${apiKey}&pageSize=${pageSize}`;
        const {data}=await axios.get(url)
        res.status(200).json(data.articles)
    } catch (error) {
        res.status(500).json({error: 'Error news'})
    }

}



module.exports = {
    newsHandler
}