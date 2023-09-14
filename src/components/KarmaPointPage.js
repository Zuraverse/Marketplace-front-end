import React from 'react';
import '../assets/styles/utils/global.scss';
import { useState } from 'react';
import TatsuAPI from '../TatsuPI.js-main/TatsuAPI';


const token = 'vOPZJPni3S-iInG9MM1tzGEwTLOBv5kJQ';
const guildID = '960497893540786206';

const api = new TatsuAPI(token);

const KarmaPointPage = () => {
  const [discordId, setDiscordId] = useState('');
  const [karmaPoint, setKarmaPoint] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function checkKarmaPoint(e) {
    e.preventDefault();
    if (!discordId) {
      setErrorMessage('Please enter a valid discord id');
      return;
    }
  
    console.log('id is: ', discordId);
    const result = await api.getUserPoint(discordId, guildID);
    console.log('karma point is: ', result.points);
    if (result.points === undefined) {
      setErrorMessage('Error: Join our discord server if have not joined yet or check your discord user id');
    } 
    setKarmaPoint(result.points);
    setDiscordId('');
    setIsSubmitted(true);
  }

  return (
    <div className="black-background">
      <div className="background">
        <div className="center-box">
          {!isSubmitted ? (
            <form onSubmit={checkKarmaPoint} className="form">
              <h2 className="heading-style">Enter your discord id and know your karma point</h2>
              <input className="input" id="karma" value={discordId} onChange={(e) => setDiscordId(e.target.value)} />
              <button className="btn" id="karma" onClick={checkKarmaPoint}>
                Submit
              </button>
            </form>
          ) : (
            <>
              {karmaPoint !== undefined ? (
                <div className="text">Your discord Karma Point is: {karmaPoint}</div>
              ) : (
                <p className="error-text">{errorMessage} </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KarmaPointPage;
