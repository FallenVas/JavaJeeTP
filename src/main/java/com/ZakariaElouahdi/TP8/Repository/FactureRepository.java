package com.ZakariaElouahdi.TP8.Repository;

import com.ZakariaElouahdi.TP8.Models.Facture;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface FactureRepository extends JpaRepository<Facture , Long> {
    Facture findByDate(Date date);
}
