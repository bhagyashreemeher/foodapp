import React, { useEffect, useState } from 'react'
import { Axios, API_URL } from '../../constant';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';

export const Articles = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchArticles();
        return () => {
            //cleanup
        }
    }, [])

    async function fetchArticles() {
        const response = await Axios.get(`${API_URL}/articles`);
        if (response.data && response.data.data) {
            setArticles(response.data.data);
            setIsLoading(false);
        }
    }
    return (
        <div>
            {
                isLoading ?
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: Math.random() * 99 + "%" }}></div>
                    </div>
                    :
                    <div className="card-deck">
                        {
                            articles.map((article) =>
                                    <Link to={`/articles/${article._id}`} key={article._id} style={{ textDecoration: "none" }}>
                                        <div className="card mb-4 border-light text-white bg-primary">
                                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                                            <div className="card-body shadow-lg">
                                                <h5 className="card-title">{article.name}</h5>
                                                <p className="card-text">{article.description}</p>
                                            </div>
                                            <div className="card-footer bg-info text-right">
                                                <p className="card-text"><small className="text-white">Last updated <TimeAgo date={article.updatedAt} /></small></p>
                                            </div>
                                        </div>
                                    </Link>
                            )
                        }
                    </div>
            }
        </div>

    )
}
