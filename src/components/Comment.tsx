import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://br.web.img3.acsta.net/pictures/18/07/25/22/12/5616819.jpg"
                alt=""
            >
            </Avatar>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Henry Cavill</strong>
                            <time title="May 11th, 17:55" dateTime="2023-05-20 17:55:30">About 1h ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Delete comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp onClick={(handleLikeComment)} />
                        Applause <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}