export const SITE_URL = 'https://germanmontenegro.fit';
export const HOME_TITLE = 'Germán Montenegro | Fisioterapia Deportiva en Bogotá';
export const DEFAULT_DESCRIPTION = 'Fisioterapia deportiva en Bogotá especializada en atletas de CrossFit, halterofilia, BJJ y boxeo. Diagnóstico preciso, tratamiento basado en evidencia y readaptación para volver a competir.';

// Search intent and metadata for the existing published routes.
export const PAGE_SEO = {
  "bjj": {
    "title": "Fisioterapia para BJJ",
    "description": "Lesiones en Brazilian Jiu-Jitsu: diagnóstico, tratamiento y prevención para grapplers en Bogotá."
  },
  "boxeo": {
    "title": "Fisioterapia para Boxeo",
    "description": "Lesiones de boxeo: manos, hombros y más. Fisioterapia deportiva para boxeadores en Bogotá."
  },
  "crossfit": {
    "title": "Fisioterapia para CrossFit",
    "description": "Lesiones de CrossFit y protocolo de retorno al box. Fisioterapia deportiva para crossfitters en Bogotá."
  },
  "deportes": {
    "title": "Fisioterapia por Deporte",
    "description": "Fisioterapia especializada por deporte: CrossFit, halterofilia, BJJ y boxeo. Protocolos de retorno a la competición."
  },
  "weightlifting": {
    "title": "Fisioterapia para Halterofilia",
    "description": "Lesiones en halterofilia y levantamiento olímpico. Tratamiento y readaptación en Bogotá."
  },
  "fisioterapia": {
    "title": "Fisioterapia Deportiva en Bogotá",
    "description": "Consulta de fisioterapia deportiva en Bogotá: valoración, tratamiento manual, punción seca y readaptación para atletas. Agenda tu cita."
  },
  "bursitis": {
    "title": "Bursitis: Síntomas y Tratamiento",
    "description": "Bursitis en deportistas: causas, síntomas y tratamiento de fisioterapia en Bogotá."
  },
  "ciatica": {
    "title": "Ciática: Síntomas y Tratamiento",
    "description": "Ciática y dolor lumbar irradiado: diagnóstico, test de Lasègue y tratamiento fisioterapéutico en Bogotá."
  },
  "condromalacia": {
    "title": "Condromalacia Rotuliana: Tratamiento",
    "description": "Condromalacia rotuliana y dolor de rodilla: diagnóstico y rehabilitación deportiva en Bogotá."
  },
  "contractura": {
    "title": "Contractura Muscular: Tratamiento",
    "description": "Contracturas musculares en deportistas: causas, tratamiento manual y prevención en Bogotá."
  },
  "epitrocleitis": {
    "title": "Epitrocleitis: Codo de Golfista",
    "description": "Epitrocleitis o codo de golfista: diagnóstico y tratamiento de fisioterapia en Bogotá."
  },
  "hombro": {
    "title": "Hombro congelado: tratamiento",
    "description": "Hombro congelado o capsulitis adhesiva: síntomas, fases y tratamiento de fisioterapia en Bogotá. Conoce el proceso y agenda una valoración."
  },
  "lesiones": {
    "title": "Lesiones Deportivas que Tratamos",
    "description": "Guía de lesiones deportivas: pubalgia, ciática, tendinitis, hombro y más. Síntomas, diagnóstico y tratamiento en Bogotá."
  },
  "periostitis": {
    "title": "Periostitis Tibial: Tratamiento",
    "description": "Periostitis tibial (shin splints) en corredores: causas, síntomas y tratamiento en Bogotá."
  },
  "pubalgia": {
    "title": "Pubalgia: Síntomas y Tratamiento",
    "description": "Pubalgia en deportistas: causas, síntomas, diagnóstico diferencial y tratamiento en Bogotá. Vuelve a entrenar sin dolor."
  },
  "tendinitis": {
    "title": "Tendinitis rotuliana: tratamiento",
    "description": "Tendinitis rotuliana o tendinopatía del tendón rotuliano: síntomas, manejo de cargas y tratamiento de fisioterapia en Bogotá."
  },
  "metodologia": {
    "title": "Metodología de Tratamiento",
    "description": "Nuestra metodología en 4 fases: diagnóstico, control del dolor, recuperación funcional y readaptación al deporte."
  },
  "home": {},
  "masajes": {
    "title": "Masajes deportivos en Bogotá",
    "description": "Masaje deportivo para recuperación, descarga muscular y prevención de lesiones en Bogotá."
  },
  "puncion": {
    "title": "Punción seca en Bogotá",
    "description": "Punción seca para puntos gatillo y dolor miofascial en deportistas en Bogotá."
  },
  "quiropraxia": {
    "title": "Quiropraxia en Bogotá",
    "description": "Quiropraxia y ajustes para deportistas en Bogotá como parte de un plan de fisioterapia integral."
  },
  "readaptacion": {
    "title": "Readaptación deportiva en Bogotá",
    "description": "Readaptación deportiva y retorno seguro a la competición tras una lesión en Bogotá."
  },
  "sobre": {
    "title": "Sobre Germán Montenegro",
    "description": "Conoce a Germán Montenegro, fisioterapeuta deportivo en Bogotá especializado en atletas de fuerza y combate."
  }
};

// Keep the service-specific title readable instead of repeating the full tagline.
export function pageTitle(page) {
  const title = PAGE_SEO[page]?.title;
  return title ? `${title} | Germán Montenegro` : HOME_TITLE;
}
