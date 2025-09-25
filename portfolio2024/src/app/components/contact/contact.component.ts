import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  showMessage = false;

  // Enlaces de redes sociales
  socialLinks = {
    linkedin: 'https://www.linkedin.com/in/kevin-pizarro',
    instagram: 'https://www.instagram.com/kevinp_ux_ui/',
    whatsapp: 'https://wa.me/56951648876' // Reemplaza con tu número real
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.showMessage = false;

      // Simular envío del formulario
      setTimeout(() => {
        this.simulateEmailSend();
        this.isSubmitting = false;
        this.showMessage = true;
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  private simulateEmailSend(): void {
    // Aquí puedes integrar con EmailJS, Node.js + Nodemailer, o cualquier servicio de email
    const success = Math.random() > 0.1; // 90% de éxito para simulación
    
    if (success) {
      this.submitMessage = 'Tu mensaje ha sido enviado correctamente. Te responderé pronto.';
      this.contactForm.reset();
    } else {
      this.submitMessage = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return `${this.getFieldLabel(fieldName)} es requerido.`;
    }
    
    if (field?.hasError('email')) {
      return 'Por favor, ingresa un email válido.';
    }
    
    if (field?.hasError('minlength')) {
      const requiredLength = field.errors?.['minlength']?.requiredLength;
      return `${this.getFieldLabel(fieldName)} debe tener al menos ${requiredLength} caracteres.`;
    }
    
    return '';
  }

  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje'
    };
    return labels[fieldName] || fieldName;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }

  onSocialClick(platform: string): void {
    // Analytics o tracking opcional
    console.log(`Clicked on ${platform}`);
  }
}