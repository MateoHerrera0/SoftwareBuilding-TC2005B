// Mateo Herrera 
// Gerardo Gutierrez
// Game levels/rounds


using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    private Frogger frogger;

    private Home[] homes;

    public GameObject gameOverMenu;

    public Text scoreText;
    public Text livesText;
    public Text timeText;

    private int score;
    private int lives;
    private int time;

    // 
    private void Awake() 
    {
        homes = FindObjectsOfType<Home>();
        frogger = FindObjectOfType<Frogger>();
    }

    // New game when first starting
    private void Start()
    {
        NewGame();
    }

    // New game with scroe and lives values reset
    private void NewGame()
    {
        gameOverMenu.SetActive(false);

        SetScore(0);
        SetLives(3);
        NewLevel();
    }

    // new level check for respawn available
    private void NewLevel()
    {
        for(int i = 0; i < homes.Length; i++)
        {
            homes[i].enabled = false;
        }

        Respawn();

    }

    // Game Manager respawn function, timer reset.
    private void Respawn()
    {
        frogger.Respawn();

        StopAllCoroutines();
        StartCoroutine(Timer(30));
    }

    // Timer set for x time, ui display of timer
    // timer death mecanic
    private IEnumerator Timer(int duration)
    {
        time = duration;
        timeText.text = time.ToString();


        while(time > 0)
        {
            yield return new WaitForSeconds(1);

            time--;
            timeText.text = time.ToString();
        }

        frogger.Death();
    }

    // Lives and score mod when dying, 
    // respawn if lives left
    public void Died() {
        {
            SetLives(lives - 1);

            SetScore(score - 150);

            if(lives > 0)
            {
                Invoke(nameof(Respawn), 1f);
            }
            else
            {
                Invoke(nameof(GameOver), 1f);
            }
        }
    }

    // Game over to stop player movement/game and display menu
    private void GameOver()
    {
        frogger.gameObject.SetActive(false);

        gameOverMenu.SetActive(true);

        StopAllCoroutines();
        StartCoroutine(PlayAgain());
    }

    // Play again button
    private IEnumerator PlayAgain()
    {
        bool playAgain = false;

        while(!playAgain)
        {
            if(Input.GetKeyDown(KeyCode.Return))
            {
                playAgain = true;
            }

            yield return null;
        }

        NewGame();
    }

    // score mecanic for advancing game rows
    public void AdvancedRow()
    {
        SetScore(score + 10);
    }

    // Home objective check (progress)
    public void HomeOccupied()
    {
        frogger.gameObject.SetActive(false);

        int bonusPoints = time * 20;

        SetScore(score + bonusPoints + 50);

        if(Cleared())
        {
            SetScore(score + 1000);
            SetLives(lives + 1);
            Invoke(nameof(NewLevel), 1f);
        }
        else
        {
            Invoke(nameof(Respawn), 1f);
        }
    }

    // level cleared aux function
    private bool Cleared()
    {
        for(int i = 0; i < homes.Length; i++)
        {
            if(!homes[i].enabled)
            {
                return false;
            }
        }

        return true;
    }

    // Setting score and display it
    private void SetScore(int score)
    {
        this.score = score;

        scoreText.text = score.ToString();
    }

    // Setting lives and display them
    private void SetLives(int lives)
    {
        this.lives = lives;

        livesText.text = lives.ToString();
    }

}
