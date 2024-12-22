import React from 'react'
import Profilecard from './Profilecard'

const Profile = () => {
  return (
    <div>
      <Profilecard name="Mishwani" para="This is the text page" greeting={
        <div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, voluptatem!</p>
        </div>
      } />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae aliquam facilis. Eum, repellendus ea, quibusdam eius error voluptatibus laborum obcaecati omnis beatae soluta quam. Quaerat harum eligendi sunt tempora dolorum suscipit fuga aspernatur, placeat dolor aut, doloribus omnis ratione fugiat voluptatem voluptatibus praesentium earum corrupti doloremque numquam labore fugit distinctio maxime? Ipsa neque itaque ut ullam laudantium voluptatem earum vero dolor. Itaque cum nostrum eius, quam voluptate cumque accusamus amet error nobis, nam est eveniet pariatur numquam? Illo sint hic eveniet, non cumque quasi explicabo, architecto eos provident sit pariatur numquam in atque. Excepturi aliquid fugiat ea quidem! Quos.</p>
      <button>Contact Now </button>
    </div>
    
  )
}

export default Profile