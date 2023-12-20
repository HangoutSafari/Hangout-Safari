const aliens = [Alien1, Alien2...]

function spawnNewAline(): Alien
{
    const newAlien = new Alien();

    //ittarate and check if the new alien will spawn on top of ther alien
    aliens.forEach(alien = >{
        if(newAlien.x == aliens.x ) //do some additional checks here
        {
            newAlien.setPostitionX(currentPosition + aliens.width); //calcualte the postion better
        }
    })

    //return newly crated alien with the updated position
    return newAlien;
}
