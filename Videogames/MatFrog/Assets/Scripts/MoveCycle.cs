// Mateo Herrera 
// Gerardo Gutierrez
// Other movements Scripts

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveCycle : MonoBehaviour
{

    public Vector2 direction = Vector2.right;
    public float speed  = 1f;
    public int size = 1;

    private Vector3 leftEdge;
    private Vector3 rightEdge;

    // starting point for obstacles and platforms
    private void Start()
    {
        leftEdge = Camera.main.ViewportToWorldPoint(Vector3.zero);
        rightEdge = Camera.main.ViewportToWorldPoint(Vector3.right);
    }

    // Movement of cars / object and logs / platforms
    private void Update()
    {
        if(direction.x > 0 && (transform.position.x - size) > rightEdge.x)
        {
            // Vector3 position = transform.position;
            // position.x = leftEdge.x - size;
            // transform.position = position;
            transform.position = new Vector3(leftEdge.x - size, transform.position.y, transform.position.z);
        }
        else if(direction.x < 0 && (transform.position.x + size) < leftEdge.x)
        {
            // Vector3 position = transform.position;
            // position.x = rightEdge.x - size;
            // transform.position = position;
            transform.position = new Vector3(rightEdge.x + size, transform.position.y, transform.position.z);
        }
        else
        {
            transform.Translate(direction * speed * Time.deltaTime);
        }
    }
}
