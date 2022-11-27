import { css } from "@emotion/react";
import { Input } from "../input";
import { Button } from "../button";

const styles = {
  container: css`
    border: solid 1px #888;
    padding: 16px;
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  `,
  row: css`
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
  `,
  input: css`
    width: 100px;
  `,
} as const;

export const ExampleForm: React.FC = () => {
  return (
    <div css={styles.container}>
      <p>Chromatic で日本語を含むコンポーネントを描画できるかどうかのテスト</p>
      <div css={styles.row}>
        <Input placeholder="受付番号" defaultValue="" css={styles.input} />
        <Button>問い合わせ</Button>
      </div>
    </div>
  );
};
