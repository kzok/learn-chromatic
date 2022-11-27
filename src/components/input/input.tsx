import { forwardRef } from "react";
import { css } from "@emotion/react";
import { INPUT_HEIGHT } from "../../utils/styles";

const styles = {
  input: css`
    height: ${INPUT_HEIGHT};
    padding: 4px;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    border: 1px solid #d4d8dd;
    border-radius: 4px;
    outline: none;

    &::placeholder {
      color: #999;
    }

    &:disabled {
      color: #c5cbcf;
      cursor: not-allowed;
      background-color: #fafafa;
      border: 1px solid #dce0e6;
    }
  `,
} as const;

export const Input = forwardRef(
  (
    props: React.ComponentPropsWithoutRef<"input">,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => <input {...props} ref={ref} css={styles.input} />
);
