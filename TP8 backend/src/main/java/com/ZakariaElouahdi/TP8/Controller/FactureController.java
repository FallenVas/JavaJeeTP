package com.ZakariaElouahdi.TP8.Controller;

import com.ZakariaElouahdi.TP8.Models.Facture;
import com.ZakariaElouahdi.TP8.Repository.FactureRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class FactureController {
    private FactureRepository factureRepository;

    FactureController(FactureRepository factureRepository) {
        this.factureRepository = factureRepository;
    }

    @GetMapping("/listFacture")
    public Collection<Facture> Factures(){
        return  factureRepository.findAll();
    }
    @CrossOrigin
    @GetMapping("/Facture/{id}")
    ResponseEntity<?> getFacture(@PathVariable Long id){
        Optional<Facture> facture = factureRepository.findById(id);
        return facture.map(response -> ResponseEntity.ok().body(response)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @PostMapping("/AddFacture")
    ResponseEntity<Facture> createFacture(@Validated @RequestBody Facture facture) throws URISyntaxException {
        Facture result = factureRepository.save(facture);
        return ResponseEntity.created(new URI("/api/AddFacture"+result.getId())).body(result);
    }
    @PutMapping("/UpdateFacture/{id}")
    ResponseEntity<Facture> updateFacture(@Validated @RequestBody Facture facture){
        Facture result = factureRepository.save(facture);
        return  ResponseEntity.ok().body(result);
    }
    @DeleteMapping("/Facture/{id}")
    ResponseEntity<?> deleteFacture(@Validated @PathVariable Long id){
        factureRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
