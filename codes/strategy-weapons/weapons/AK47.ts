import { WeaponBehavior } from '../behaviors/WeaponBehavior';

export class AK47 implements WeaponBehavior {
  equiped = false;
  maxAmmo = 200;
  ammo = this.maxAmmo;

  equip() {
    this.equiped = true;
    console.log('ak47 Equiped');
  }

  unequip() {
    this.equiped = false;
    console.log('ak47 unequiped');
  }

  attack() {
    if (!this.equiped) {
      console.log('the ak47 is not equipped');
      return;
    }

    if (this.ammo <= 0) {
      console.log(`the ak47 has no more bullets`);
      return;
    }

    this.ammo -= 1;
  }
}
