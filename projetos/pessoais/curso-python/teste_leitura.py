#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Nov  1 09:03:22 2023

@author: imanichi
"""

import pandas as pd 

dados = pd.read_html('pagamento.html')

# Verifique se a função read_html retorna uma lista de DataFrames
print(type(dados))

# Se houver apenas uma tabela HTML na página, você pode pegar o primeiro DataFrame da lista
dados_df = dados[0]

# Se houver mais de uma tabela HTML, você precisará identificar a tabela correta
# e pegar o DataFrame correspondente a ela

print(dados_df)
