import os
from openai import OpenAI
from ..schemas.ai import AIAnalysisRequest, AIBusinessPlanRequest, AIReportRequest


class JuntoXAIService:
    def __init__(self) -> None:
        self.api_key = os.getenv('OPENAI_API_KEY')
        self.client = OpenAI(api_key=self.api_key) if self.api_key else None

    def is_configured(self) -> bool:
        return self.client is not None

    def _call_model(self, prompt: str) -> str:
        if not self.client:
            raise RuntimeError('OPENAI_API_KEY is not configured. Add it to the environment to enable AI features.')

        response = self.client.chat.completions.create(
            model='gpt-4o-mini',
            messages=[
                {
                    'role': 'system',
                    'content': 'Vous êtes JuntoX AI, un assistant stratégique spécialisé pour les entreprises africaines et mondiales.'
                },
                {'role': 'user', 'content': prompt},
            ],
            temperature=0.2,
            max_tokens=700,
        )
        return (response.choices[0].message.content or '').strip()

    def analyze_project(self, request: AIAnalysisRequest) -> str:
        prompt = (
            f"Analyse ce projet : {request.name}. Description : {request.description}. "
            f"Objectif stratégique : {request.objective}. "
            f"Liste les forces, risques et recommandations prioritaires."
        )
        return self._call_model(prompt)

    def generate_business_plan(self, request: AIBusinessPlanRequest) -> str:
        prompt = (
            f"Génère un business plan clair pour {request.company_name}. "
            f"Résumé : {request.summary}. "
            f"Public visé : {request.target_audience}. "
            f"Inclue une proposition de valeur, modèle de revenus, besoins de financement et prochaines étapes."
        )
        return self._call_model(prompt)

    def generate_report(self, request: AIReportRequest) -> str:
        prompt = (
            f"Rédige un rapport professionnel sur : {request.topic}. "
            f"Contexte : {request.context}. "
            f"Objectif : {request.goal}. "
            f"Structure en sections claires et recommandations."
        )
        return self._call_model(prompt)
