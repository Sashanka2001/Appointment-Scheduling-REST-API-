package com.example.appointment.service;

import com.example.appointment.model.Appointment;
import com.example.appointment.model.User;
import com.example.appointment.repository.AppointmentRepository;
import com.example.appointment.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepo;

    @Autowired
    private UserRepository userRepo;

    // CREATE
    public Appointment createAppointment(Appointment appointment) {

        if (appointment.getUser() != null) {
            Long userId = appointment.getUser().getId();
            User user = userRepo.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            appointment.setUser(user);
        }

        return appointmentRepo.save(appointment);
    }

    // READ - all
    public List<Appointment> getAllAppointments() {
        return appointmentRepo.findAll();
    }

    // READ - filter by date range
    public List<Appointment> getByDateRange(LocalDate start, LocalDate end) {
        return appointmentRepo.findByDateBetween(start, end);
    }

    // UPDATE
    public Appointment updateAppointment(Long id, Appointment newData) {

        Appointment existing = appointmentRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found with id " + id));

        existing.setDate(newData.getDate());
        existing.setTime(newData.getTime());
        existing.setDescription(newData.getDescription());

        if (newData.getUser() != null) {
            Long userId = newData.getUser().getId();
            User user = userRepo.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            existing.setUser(user);
        }

        return appointmentRepo.save(existing);
    }

    // DELETE
    public void deleteAppointment(Long id) {
        appointmentRepo.deleteById(id);
    }
}
