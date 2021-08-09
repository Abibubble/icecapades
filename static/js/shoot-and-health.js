// -------------------------------------------------------------------- Health Bar

let maxHealth = 50;
let currentHealth = 50;
let deadTux = 0;
let dangerZone = 10;
let healthBar = document.getElementById("health-bar");
let snowmanHealthBar = document.getElementById("boss-health-bar");

// Update health bar progress
function pushHealth() {
    if (currentHealth > maxHealth) {
        currentHealth = maxHealth;
    }
    healthBar.style.width = currentHealth * 2 + "%";
}

// Update boss health bar progress
function pushSnowmanHealth() {
    if (snowmanHealth > 30) {
        snowmanHealthBar.style.backgroundColor = 'limegreen';
    } else {
        snowmanHealthBar.style.backgroundColor = 'red';
    }
    snowmanHealthBar.style.width = snowmanHealth/3 * 2 + "%";
}

// Checks if Tux is dead, updates progress bar
function checkHealth() {
    if (currentHealth <= deadTux) {
        healthBar.style.width = "0%";
        tux.die();
        if (winModal.classList.contains("invisible")) {
            gameOverModal.classList.remove("invisible");
            gameOverInner.classList.add("modal-animation");
        }
    } else if (currentHealth <= dangerZone) {
        pushHealth();
        healthBar.style.backgroundColor = "red";
    } else {
        healthBar.style.backgroundColor = "blue";
        pushHealth();
    }
}

// When Tux is hit, play hit audio and update health
function tuxIsHit(hurt) {
    if (audio == 'on') {
        hitAudio.play();
    }
    currentHealth -= hurt;
    checkHealth();
}

// When Tux catches a fish, play fish audio and update health
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

// Update snowballs bar progress
function pushAmmo() {
    if (currentAmmo > maxSnowballs) {
        currentAmmo = maxSnowballs;
    }
    snowballBar.style.width = currentAmmo * 10 + "%";
    if (currentAmmo <= lowAmmo) {
        snowballBar.style.backgroundColor = "red";
    } else {
        snowballBar.style.backgroundColor = "blue";
    }
}

// Update ammo when Tux fires a snowball
function shoot() {
    if (currentAmmo > noAmmo) {
        currentAmmo--;
        pushAmmo();
    }
}

// Increase snowballs when Tux catches a snowflake, and plays audio
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
