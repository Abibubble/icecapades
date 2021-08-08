// -------------------------------------------------------------------- Health Bar

let maxHealth = 50;
let currentHealth = 50;
let deadTux = 0;
let dangerZone = 10;
let healthBar = document.getElementById("health-bar");

function pushHealth() {
    healthBar.style.width = currentHealth * 2 + "%";
}

function checkHealth() {
    if (currentHealth <= deadTux) {
        healthBar.style.width = "0%";
        tux.die();
        gameOverModal.classList.remove("invisible");
        gameOverInner.classList.add("modal-animation");
    } else if (currentHealth <= dangerZone) {
        pushHealth();
        healthBar.style.color = "red";
    } else {
        pushHealth();
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
    if (currentHealth <= 30) {
        currentHealth += 20;
    } else if (currentHealth > 30) {
        currentHealth = 50;
    }
    checkHealth();
    if (audio == 'on') {
        eatFishAudio.play();
    }
}

// -------------------------------------------------------------------- Snowballs Bar

let maxSnowballs = 10;
let noAmmo = 0;
let lowAmmo = 3;
let snowballBar = document.getElementById("snowball-bar");

function pushAmmo() {
    snowballBar.style.width = currentAmmo * 10 + "%";
    if (currentAmmo <= lowAmmo) {
        snowballBar.style.color = "red";
    }
}

function shoot() {
    if (currentAmmo > noAmmo) {
        currentAmmo--;
        pushAmmo();
    }
}

function tuxGetsASnowflake() {
    if (currentAmmo <= 8) {
        currentAmmo += 2;
    } else if (currentAmmo == 9) {
        currentAmmo++;
    }
    pushAmmo();
    if (audio == 'on') {
        reloadAudio.play();
    }
}
