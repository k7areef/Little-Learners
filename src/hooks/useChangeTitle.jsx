import React from 'react';
function useChangeTitle(title = "Little Learners - Home") {
    React.useEffect(() => {
        window.document.title = "Little Learners - " + title;
    }, [title]);
    return null;
};
export default useChangeTitle;