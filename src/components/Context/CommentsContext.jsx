import { createContext, useContext, useState } from "react";

export const CommentsContext = createContext(null);

export const WithComments = ({ children, initialComments = [] }) => {
    const [comments, setComments] = useState(initialComments)

    return (
        <CommentsContext.Provider value={{ comments, setComments }}>
            {children}
        </CommentsContext.Provider>
    )
}

export const useComments = () => useContext(CommentsContext).comments;