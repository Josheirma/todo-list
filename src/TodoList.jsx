import React from "react";
import styles from "./TodoList.module.css";

function TodoList({ todos, onDelete }) {
  return (
    <ul className={styles.list}>
      {todos.map((item, index) => (
        <li key={index} className={styles.item}>
          <span>{item}</span>
          <button
            className={styles.deleteBtn}
            onClick={() => onDelete(index)}
            aria-label="Delete"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
