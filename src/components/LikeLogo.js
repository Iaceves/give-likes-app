import React from "react";
import styles from "../app.module.css";
import { useState, useEffect } from "react";

export default function LikeLogo() {
  const [likes, setLikes] = useState(0);
  const [pluralLikes, setPluralLikes] = useState(false);

  const addLikes = () => {
    setLikes((likes) => likes + 1);
  };

  useEffect(() => {
    if (likes == 0) {
      setPluralLikes(true);
    } else if (likes == 1) {
      setPluralLikes(false);
    } else {
      setPluralLikes(true);
    }
    console.log(pluralLikes);
  }, [likes]);

  return (
    <div className={styles.likeLogo}>
      <img
        onClick={addLikes}
        className={styles.imgLike}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"
      ></img>
      <p className={styles.likesNum}>{likes}</p>
      {pluralLikes ? "likes" : "like"}
    </div>
  );
}
