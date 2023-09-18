import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";

type DocButtonProps = {
  title: string;
  description: string;
  route: string;
};
export const DocButton = ({ title, description, route }: DocButtonProps) => (
  <div className={styles.container}>
    <span className={styles.title}>{title}</span>
  </div>
);

type DocButtonsContainerProps = PropsWithChildren;
export const DocButtonsContainer = ({ children }: DocButtonsContainerProps) => (
  <div className={styles.listContainer}>{children}</div>
);
