import styles from './Spinner.module.css'

export default function Spinner ({ className}: {className?: string}) {
    return (
      <div className={`${styles["spinner"]} ${styles[`${className}`]}`}></div>
    );
}