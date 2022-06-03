import { createContext, useContext, useState} from "react";

export const CommentsContext = createContext(null);

export const WithComments = ({ children, initialComments = [] }) => {
    const [comments, setComments] = useState(initialComments)
    const [page, setPage] = useState(0);
    const [globalComments, setGlobalComments] = useState([]);

    return (
        <CommentsContext.Provider value={{ comments, setComments, page, setPage, globalComments, setGlobalComments }}>
            {children}
        </CommentsContext.Provider>
    )
}

export const useComments = () => useContext(CommentsContext).comments;