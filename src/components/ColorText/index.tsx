import React from "react";
import styles from "./styles.module.css";

export const Color = ({
  children,
  color,
}: {
  children: string;
  color: string;
}) => (
  <span className={styles.coloredText} style={{ color }}>
    {children}
  </span>
);
