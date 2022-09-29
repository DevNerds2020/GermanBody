import { css } from '@emotion/css';

const classes = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 3rem;
  `,
  word: css`
   color: #0b3e62;
  `,
  translationContainer: css`
    display: flex;  
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `,
  translationItem: css`
    color: #469a22;
    `,
  cardContentContainer: css`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `,
  additionalContentContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `,
  upsideContentContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    `,
  verbsTenseContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `,
};
export default classes;
