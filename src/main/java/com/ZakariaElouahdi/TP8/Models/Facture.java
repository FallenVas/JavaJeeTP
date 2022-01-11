package com.ZakariaElouahdi.TP8.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "facture")
public class Facture {
    @Id
    private Long id;
    private Date date;
    private double amount;
}
