import React, { forwardRef } from "react";
import { css } from "@emotion/react";

const styles = {
  button: css`
    padding: 8px;
    font-size: 14px;
    color: #fff;
    background: #48f;
    border: 1px solid transparent;
    border-radius: 4px;

    &:disabled {
      color: #fff;
      cursor: not-allowed;
      background: #dce0e6;
      border-color: #dce0e6;
    }

    &:hover:not(:disabled) {
      cursor: pointer;
    }
  `,
};

export type ButtonProps = Readonly<React.ComponentPropsWithoutRef<"button">>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, ...others } = props;
    return (
      <button {...others} type="button" ref={ref} css={styles.button}>
        {children}
      </button>
    );
  }
);
