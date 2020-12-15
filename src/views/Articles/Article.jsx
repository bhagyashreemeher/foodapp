import React, { useEffect, useState } from 'react';
import { Axios, API_URL } from '../../constant';
import TimeAgo from 'react-timeago';
import { EditorState } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Article.css';

const Article = props => {
    const id = props.match.params.id;
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle] = useState({});

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    // const editor = React.useRef(null);
    // function focusEditor() {
    //     editor.current.focus();

    // }

    useEffect(() => {
        fetchArticle();
        return () => {
            //cleanup
        }
    }, [])

    async function fetchArticle() {
        const response = await Axios.get(`${API_URL}/articles/${id}`);
        if (response.data && response.data.data) {
            setArticle(response.data.data);
            setIsLoading(false);
        }
    }

    return (
        <div>{
            isLoading ?
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: Math.random() * 99 + "%" }}></div>
                </div>
                :
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-8">
                                {article.name}
                            </div>
                            <div className="col-md-4 text-right mb-2">
                                <p className="card-text"><small className="text-muted font-italic">Last updated <TimeAgo date={article.updatedAt} /></small></p>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Editor
                            defaultEditorState={editorState}
                            onEditorStateChange={setEditorState}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                        />
                    </div>
                </div>
        }
        </div>
    )
}

export default Article
