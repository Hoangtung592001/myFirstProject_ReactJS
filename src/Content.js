import logo from './logo.svg';
import { useState } from 'react';
import { useEffect, memo } from 'react';


function Content() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId]);

    return (
        <h2>Hello Anh Em F8!</h2>
    );
}

export default memo(Content);
