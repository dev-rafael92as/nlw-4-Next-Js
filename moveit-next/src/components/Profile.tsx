import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/dev-rafael92as.png" alt="Rafael Barros"/>
    
        <div>
        <strong>Rafael Barros</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level 1
          </p>
        </div>
    </div>
  )
}