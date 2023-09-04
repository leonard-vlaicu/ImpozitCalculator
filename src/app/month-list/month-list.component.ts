import {Component} from '@angular/core';

/**
 * @title Component for calculating taxes
 */
@Component({
  selector: 'app-month-list',
  templateUrl: './month-list.component.html',
  styleUrls: ['./month-list.component.scss']
})
export class MonthListComponent {
  readonly TAXA_SRL = 16 / 100;
  readonly TAXA_MICRO = 1 / 100;

  numarLuni: number = 0;

  venituriFirma: number = 15000;

  cheltuieliFirmaSRL: number = 0;
  cheltuieliFirmaMicro: number = 0;

  profitFirmaSRL: number = 0;
  profitFirmaMicro: number = 0;

  profitAfterTaxSRL: number = 0;
  profitAfterTaxMicro: number = 0;

  cheltuieliContabilSRL: number = 300;
  cheltuieliContabilMicro: number = 350;

  // cheltuieliAngajat: number = 1165 * 12;
  cheltuieliAngajat: number = 1189;


  calculVenituriFirma(): number {
    return this.venituriFirma * this.numarLuni;
  }

  /**
   * Calculate the profit of the company
   * @returns profit of the company
   */
  calculateProfitSRL(): number {
    this.profitFirmaSRL = this.calculVenituriFirma() - (this.cheltuieliFirmaSRL + this.calculCheltuieliContabilSRL());
    return this.profitFirmaSRL;
  }

  calculateProfitMicro(): number {
    this.profitFirmaMicro = this.calculVenituriFirma() - (this.calculateTaxMicro() + this.cheltuieliFirmaMicro
      + this.calculCheltuieliContabilMicro() + this.calculCheltuieliAngajat());
    return this.profitFirmaMicro;
  }

  calculateTaxSRL(): number {
    return this.profitFirmaSRL * this.TAXA_SRL;
  }

  calculateTaxMicro(): number {
    return this.calculVenituriFirma() * this.TAXA_MICRO;
  }

  calculateProfitAfterTaxSRL(): number {
    this.profitAfterTaxSRL = this.profitFirmaSRL - this.calculateTaxSRL();
    return this.profitAfterTaxSRL;
  }

  calculateProfitAfterTaxMicro(): number {
    this.profitAfterTaxMicro = this.profitFirmaMicro;
    return this.profitAfterTaxMicro;
  }

  calculCheltuieliContabilSRL(): number {
    return this.cheltuieliContabilSRL * this.numarLuni;
  }

  calculCheltuieliContabilMicro(): number {
    return this.cheltuieliContabilMicro * this.numarLuni;
  }

  calculCheltuieliAngajat(): number {
    return this.cheltuieliAngajat * this.numarLuni;
  }
}
