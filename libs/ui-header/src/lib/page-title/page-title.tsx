import styles from './page-title.module.scss';

/* eslint-disable-next-line */
export interface PageTitleProps {}

export function PageTitle(props: PageTitleProps) {
  return (
    <div className={styles['container']}>
      <h1>Titulo da Pagina Page Title</h1>
    </div>
  );
}

export default PageTitle;
