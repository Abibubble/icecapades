// -------------------------------------------------------------------- Health Bar

let maxHealth = 50;
let currentHealth = 50;
let deadTux = 0;
let dangerZone = 10;
let healthBar = document.getElementById("health-bar");

function pushHealth() {
    console.log("currentHealth = " + currentHealth);
    healthBar.style.width = currentHealth * 2 + "%";
}

function checkHealth() {
    pushHealth();
    if (currentHealth <= deadTux) {
        tux.die();
        gameOverModal.classList.remove("invisible");
        gameOverInner.classList.add("modal-animation");
    } else {
        if (currentHealth <= dangerZone) {
            healthBar.style.color = "red";
        }
    }
}

function tuxIsHit(hurt) {
    if (audio == 'on') {
        hitAudio.play();
    }
    currentHealth -= hurt;
    checkHealth();
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
    if (currentAmmo <= lowAmmo) {
        snowballBar.style.color = "red";
    }
}

function checkAmmo() {
    pushAmmo();
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