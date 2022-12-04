import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "안은진",
        comment: "안녕하세요, 은진입니다.",
    },
    {
        name: "안예진",
        comment: "리액트 공부하러 왔어요",
    },
    {
        name: "안뽀미",
        comment: "나도 껴주세요",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );          
                })}
        </div>
    );
}

export default CommentList;