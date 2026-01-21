<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function getProfileData()
    {
        $profile = [];

        $profileInfo = Profile::first();
        $profileExperiences = $profileInfo->experiences()->get();
        $profileProjects = $profileInfo->projects()->get();

        $profile['profileInfo'] = $profileInfo;
        $profile['experiences'] = $profileExperiences;
        $profile['projects'] = $profileProjects;

        return response()->json($profile);
    }
}
