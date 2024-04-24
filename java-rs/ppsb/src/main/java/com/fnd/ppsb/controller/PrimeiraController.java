package com.fnd.ppsb.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/primeiraController")
public class PrimeiraController {
@GetMapping("/primeiroMetodo/{id}")
    public String primeiroMetodo(@PathVariable String id) {
    return "O parametro e " + id;
}

    @GetMapping("/metodoComQueryParams")
    public String methodComQueryParams(@RequestParam String id) {
        return "O parametro com metodoComQueryParams e " + id;
    }

    @GetMapping("/metodoComQueryParams2")
    public String methodComQueryParams2(@RequestParam Map<String, String> allParams) {
        return "O parametro com metodoComQueryParams e " + allParams.entrySet();
    }

    @PostMapping("/metodoComBodyParams")
    public String metodoComBodyParams(@RequestBody Usuario usuario) {
    return "metodocombodyparams " + usuario.username;
    }

    @PostMapping("/metodoComHeaders")
    public String metodoComHeaders(@RequestHeader("name") String name) {
        return "metodocomHeaders " + name;
    }

    @PostMapping("/metodoComListHeaders")
    public String metodoComHeaders(@RequestHeader Map<String, String> headers) {
        return "metodocomHeaders " + headers.entrySet();
    }

    @GetMapping("/metodoResponseEntity")
    public ResponseEntity<String> metodoResponseEntity() {
        return ResponseEntity.status(HttpStatus.CREATED).body("mensagem de erro");
    }


    record Usuario(String username) {}

}
