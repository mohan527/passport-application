package com.passport;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootApplication
@RestController
@RequestMapping("/api/passport")
public class PassportApp {

    private static List<Map<String, Object>> applications = new ArrayList<>();

    public static void main(String[] args) {
        SpringApplication.run(PassportApp.class, args);
    }

    @GetMapping("/health")
    public Map<String, Object> health() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "Passport Application Server is Running");
        response.put("version", "1.0.0");
        response.put("timestamp", LocalDateTime.now());
        response.put("javaVersion", System.getProperty("java.version"));
        return response;
    }

    @PostMapping("/apply")
    public Map<String, Object> submitApplication(@RequestBody PassportRequest request) {
        Map<String, Object> application = new HashMap<>();
        String appId = "APP-" + System.currentTimeMillis();
        
        application.put("applicationId", appId);
        application.put("fullName", request.getFullName());
        application.put("email", request.getEmail());
        application.put("phone", request.getPhone());
        application.put("dateOfBirth", request.getDateOfBirth());
        application.put("status", "SUBMITTED");
        application.put("submittedAt", LocalDateTime.now());
        
        applications.add(application);
        
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Application submitted successfully");
        response.put("applicationId", appId);
        return response;
    }

    @GetMapping("/applications")
    public Map<String, Object> getAllApplications() {
        Map<String, Object> response = new HashMap<>();
        response.put("total", applications.size());
        response.put("applications", applications);
        return response;
    }

    @GetMapping("/status/{appId}")
    public Map<String, Object> getStatus(@PathVariable String appId) {
        Map<String, Object> response = new HashMap<>();
        
        for (Map<String, Object> app : applications) {
            if (app.get("applicationId").equals(appId)) {
                response.put("found", true);
                response.put("applicationId", appId);
                response.put("status", app.get("status"));
                response.put("name", app.get("fullName"));
                response.put("submittedAt", app.get("submittedAt"));
                return response;
            }
        }
        
        response.put("found", false);
        response.put("message", "Application not found");
        return response;
    }

    @PostMapping("/status/{appId}/update")
    public Map<String, Object> updateStatus(@PathVariable String appId, @RequestBody StatusUpdateRequest request) {
        Map<String, Object> response = new HashMap<>();
        
        for (Map<String, Object> app : applications) {
            if (app.get("applicationId").equals(appId)) {
                app.put("status", request.getStatus());
                app.put("lastUpdated", LocalDateTime.now());
                
                response.put("success", true);
                response.put("message", "Status updated successfully");
                response.put("applicationId", appId);
                response.put("newStatus", request.getStatus());
                return response;
            }
        }
        
        response.put("success", false);
        response.put("message", "Application not found");
        return response;
    }

    // Request DTOs
    public static class PassportRequest {
        private String fullName;
        private String email;
        private String phone;
        private String dateOfBirth;

        public String getFullName() { return fullName; }
        public void setFullName(String fullName) { this.fullName = fullName; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }

        public String getDateOfBirth() { return dateOfBirth; }
        public void setDateOfBirth(String dateOfBirth) { this.dateOfBirth = dateOfBirth; }
    }

    public static class StatusUpdateRequest {
        private String status;

        public String getStatus() { return status; }
        public void setStatus(String status) { this.status = status; }
    }
}
