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
        die();
        // Game over modal / replay?
    } else {
        if (currentHealth <= dangerZone) {
            healthBar.style.color = "red";
        }
    }
}

function tuxIsHit() {
    health -= 10;
    checkHealth();
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
    if (currentAmmo <= noAmmo) {
        // Oh no, Tux has no ammo!
    } else {
        pushAmmo();
        if (currentAmmo <= lowAmmo) {
            snowballBar.style.color = "red";
        }
    }
}

function shoot() {
    currentAmmo--;
    checkAmmo();
}