package com.example.appointment.controller;

import com.example.appointment.model.Appointment;
import com.example.appointment.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService service;

    // CREATE
    @PostMapping
    public Appointment create(@RequestBody Appointment appointment) {
        return service.createAppointment(appointment);
    }

    // READ - all
    @GetMapping
    public List<Appointment> getAll() {
        return service.getAllAppointments();
    }

    // UPDATE
    @PutMapping("/{id}")
    public Appointment update(
            @PathVariable Long id,
            @RequestBody Appointment appointment) {
        return service.updateAppointment(id, appointment);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteAppointment(id);
    }
}
