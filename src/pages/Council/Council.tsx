import React from "react"
import styles from "./Council.module.scss"
import Lines from "components/Lines/Lines"

const Council = () => {
  const proposals = [{ status: "executed" }, { status: "queued" }, { status: "pending" }]
  return (
    <div>
      <h1 className={styles.pageTitle}>Council of Wojaks</h1>
      <div className={styles.contentSection}>
        <div className={styles.votingBody}>
          <div className={styles.linesContainer}>
            <Lines />
            Voting Power
            <Lines />
          </div>
          <div className={styles.innerContent}>
            <div className={styles.wojakBalance}>
              <h3>wojak balance</h3>
              <div>
                <span>Wojaks</span>
                <span>12</span>
              </div>
            </div>
            <button className={styles.getStarted}>get started</button>
          </div>
        </div>

        <div className={styles.proposalBody}>
          <div className={styles.linesContainer}>
            <Lines />
            Proposals
            <Lines />
          </div>
          <div className={styles.innerContent}>
            {proposals.map((prop, i) => (
              <div className={styles.proposal}>
                <h3>Proposal #{i}</h3>
                <div className={prop.status === "executed" ? styles.inverted : ""}>
                  {prop.status}
                </div>
                <button>view</button>
              </div>
            ))}
            <div>all proposals</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Council
