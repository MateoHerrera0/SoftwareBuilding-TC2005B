// Mateo Herrera 
// Gerardo Gutierrez
// Finish line

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Home : MonoBehaviour
{

    public GameObject homeFrog;

    private void OnEnable() 
    {
        homeFrog.SetActive(true);
    }

    private void OnDisable() 
    {
        homeFrog.SetActive(false);
    }

    // Setup of goal/objective collider 
    private void OnTriggerEnter2D(Collider2D other)
    {
        if(other.tag == "Player")
        {
            enabled = true;

            // Frogger frogger = other.GetComponent<Frogger>();
            // frogger.gameObject.SetActive(false);
            // frogger.Invoke(nameof(frogger.Respawn), 1f);

            FindObjectOfType<GameManager>().HomeOccupied();
        }
    }
}
