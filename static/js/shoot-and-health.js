// -------------------------------------------------------------------- Health Bar

let maxHealth = 50;
let currentHealth = 40;
let deadTux = 0;
let dangerZone = 10;
let healthBar = document.getElementById("health-bar");

function pushHealth() {
    healthBar.style.width = currentHealth * 2 + "%";

}

function checkHealth() {
    pushHealth();
    if (currentHealth <= deadTux) {
        tux.die();
        // Game over modal / replay?
    } else {
        if (currentHealth <= dangerZone) {
            healthBar.style.color = "red";
        }
    }
}

function tuxIsHit(hurt) {
    currentHealth -= hurt;
    checkHealth();
    if (audio == 'on') {
         hitAudio.play();
        }
}

function tuxGetsAFish() {
    currentHealth += 20;
    checkHealth();
    if (audio == 'on') {
        eatFishAudio.play();
    }
}

// -------------------------------------------------------------------- Snowballs Bar

let maxSnowballs = 10;
let currentAmmo = 10;
let noAmmo = 0;
let lowAmmo = 3;
let snowballBar = document.getElementById("snowball-bar");

function pushAmmo() {
    snowballBar.style.width = currentAmmo * 10 + "%";
}

function checkAmmo() {
    pushAmmo();
    if (currentAmmo <= lowAmmo) {
        snowballBar.style.color = "red";
    }
}

function shoot() {
    if (currentAmmo > noAmmo) {
        currentAmmo--;
        checkAmmo();
        if (audio == 'on') {
         throwSnowballAudio.play();
     }
    }

}
function tuxGetsASnowflake() {
    currentAmmo += 2;
    checkAmmo();
    if (audio == 'on') {
            reloadAudio.play();
        }
}